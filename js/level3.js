// ============================================
// LEVEL 3 – Encapsulation Lock System
// ============================================
// Players fix a vulnerable Java class by applying
// encapsulation in the correct order:
//   Step 1 → Make Private   (public → private)
//   Step 2 → Add Getter     (getBalance())
//   Step 3 → Add Setter     (setBalance())
// ============================================

import { addXP, addCoins } from './store.js';

let onLevel3Complete = null;
let navigateToFn = null;
let currentStep = 0; // 0 = initial, 1–3 = steps completed

// --- Code panel snapshots for each stage ---
const CODE_STATES = [
    // Step 0: vulnerable (starting state)
    'class Account {\n    public int balance;\n}',
    // Step 1: field made private
    'class Account {\n    private int balance;\n}',
    // Step 2: getter added
    'class Account {\n    private int balance;\n\n    public int getBalance() {\n        return balance;\n    }\n}',
    // Step 3: setter added (fully encapsulated)
    'class Account {\n    private int balance;\n\n    public int getBalance() {\n        return balance;\n    }\n\n    public void setBalance(int balance) {\n        this.balance = balance;\n    }\n}',
];

const VAULT_CLASSES   = ['locked', 'step-1', 'step-2', 'unlocked'];
const VAULT_STATUSES  = ['LOCKED', 'SECURING...', 'ALMOST SAFE...', 'UNLOCKED'];
const VAULT_HANDLES   = ['🔐', '🔒', '🔒', '🔓'];

const BTN_IDS = [null, 'btn-make-private', 'btn-add-getter', 'btn-add-setter'];

// ---- Public API ----

export function initLevel3(navigateTo, onCompleteFn) {
    navigateToFn    = navigateTo;
    onLevel3Complete = onCompleteFn;

    document.getElementById('btn-level3-back').addEventListener('click', () => {
        navigateToFn('level-map');
    });

    document.getElementById('btn-make-private').addEventListener('click', () => handleStep(1));
    document.getElementById('btn-add-getter').addEventListener('click',    () => handleStep(2));
    document.getElementById('btn-add-setter').addEventListener('click',    () => handleStep(3));

    document.getElementById('btn-l3-continue').addEventListener('click', () => {
        document.getElementById('l3-success').classList.add('hidden');
        if (onLevel3Complete) onLevel3Complete(3);
    });
}

export function startLevel3() {
    currentStep = 0;
    resetUI();
}

// ---- Step Handling ----

function handleStep(step) {
    if (step !== currentStep + 1) {
        showError(step);
        return;
    }

    // Hide any previous error
    document.getElementById('l3-error-msg').classList.add('hidden');

    currentStep = step;

    // Update step badge
    document.getElementById('l3-step').textContent = step;

    // Update code display
    document.getElementById('l3-code-display').textContent = CODE_STATES[step];

    // Mark the clicked button as completed
    const btn = document.getElementById(BTN_IDS[step]);
    btn.disabled = true;
    btn.classList.add('completed-step');

    // Update progress dots and connector lines
    updateProgress(step);

    // Update vault door
    updateVault(step);

    if (step === 3) {
        // Award bonus XP for the vault challenge
        addXP(30);
        addCoins(15);
        // Show success overlay after the door animation plays
        setTimeout(() => {
            document.getElementById('l3-success').classList.remove('hidden');
        }, 850);
    }
}

function showError(attemptedStep) {
    // Show error message
    document.getElementById('l3-error-msg').classList.remove('hidden');

    // Shake the button that was pressed out of order
    const btn = document.getElementById(BTN_IDS[attemptedStep]);
    if (!btn) return;
    btn.classList.remove('l3-shake'); // reset in case it's already shaking
    // Force reflow so the animation restarts
    void btn.offsetWidth;
    btn.classList.add('l3-shake');
    setTimeout(() => btn.classList.remove('l3-shake'), 450);
}

function updateProgress(step) {
    for (let i = 1; i <= 3; i++) {
        const dot = document.getElementById(`l3-p${i}`);
        if (i < step) {
            dot.className = 'l3-step-dot done';
        } else if (i === step) {
            dot.className = 'l3-step-dot done'; // final step also goes straight to done
        }
        // dots beyond current step stay default
    }

    // Activate connector lines between completed dots
    const lines = document.querySelectorAll('.l3-step-line');
    lines.forEach((line, idx) => {
        if (idx < step - 1) {
            line.classList.add('done');
        }
    });
}

function updateVault(step) {
    const door = document.getElementById('vault-door');
    door.className = `vault-door ${VAULT_CLASSES[step]}`;
    document.getElementById('vault-handle').textContent  = VAULT_HANDLES[step];
    document.getElementById('vault-status').textContent  = VAULT_STATUSES[step];

    const warning = document.getElementById('vault-warning');
    if (step === 3) {
        warning.textContent  = '✅ System Secured: Encapsulation Applied';
        warning.style.color  = 'var(--success)';
    } else if (step === 2) {
        warning.textContent  = '⚠️ Almost there! Add the setter.';
        warning.style.color  = '';
    } else if (step === 1) {
        warning.textContent  = '⚠️ Field is private — now add controlled access.';
        warning.style.color  = '';
    }
}

// ---- UI Reset ----

function resetUI() {
    // Step badge
    document.getElementById('l3-step').textContent = '0';

    // Code display
    document.getElementById('l3-code-display').textContent = CODE_STATES[0];

    // Vault door
    const door = document.getElementById('vault-door');
    door.className = 'vault-door locked';
    document.getElementById('vault-handle').textContent = '🔐';
    document.getElementById('vault-status').textContent  = 'LOCKED';

    // Warning text
    const warning = document.getElementById('vault-warning');
    warning.textContent  = '⚠️ System Vulnerable: Public Access Detected';
    warning.style.color  = '';

    // Error message
    document.getElementById('l3-error-msg').classList.add('hidden');

    // Action buttons
    BTN_IDS.slice(1).forEach(id => {
        const btn = document.getElementById(id);
        btn.disabled = false;
        btn.classList.remove('completed-step', 'l3-shake');
    });

    // Progress dots
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`l3-p${i}`).className = 'l3-step-dot';
    }

    // Connector lines
    document.querySelectorAll('.l3-step-line').forEach(line => {
        line.classList.remove('done');
    });

    // Success overlay
    document.getElementById('l3-success').classList.add('hidden');
}

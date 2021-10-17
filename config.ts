export interface IFirestorm {
    firestorm: Firestorm;
}

export class Firestorm {
    public firestore: FirebaseFirestore.Firestore;
}

export function GetStore(): IFirestorm {
    return global as never;
}

export function InitializeFirestorm() {
    const store = GetStore();

    if (!store.firestorm) {
        store.firestorm = new Firestorm();
    }
}

export function GetFirestore() {
    const store = GetStore();

    if (!store.firestorm) throw new Error('Firestore не запущен');

    return store.firestorm.firestore;
}

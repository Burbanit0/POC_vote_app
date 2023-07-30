interface Hash<T> {
    [key: string]: T;
}

export default interface Choice{
    user: Hash<string>;
    unique?: string;
    multiple?: Array<string>;
    order?: Array<string>;
    note?: Map<string, string>;
    weight?: Map<string, string>;
}
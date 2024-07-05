export interface BaseBuilder<T> {
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
  setId(id: string): T;
  setCreatedAt(createdAt: Date): T;
  setUpdatedAt(updatedAt: Date): T;
  setDeletedAt(deletedAt: Date): T;
}

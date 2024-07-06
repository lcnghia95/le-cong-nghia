export class BaseModel {
  constructor(
    protected readonly id: string,
    protected readonly createdAt: Date,
    protected updatedAt: Date,
    protected deletedAt: Date | null,
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  getId(): string {
    return this.id;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getDeletedAt(): Date | null {
    return this.deletedAt;
  }

  delete(): void {
    this.deletedAt = new Date();
  }
}

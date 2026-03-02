import { z } from "zod";

/**
 * Validation schema for waitlist email signup form
 */
export const waitlistSchema = z.object({
  name: z
    .string()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  
  email: z
    .string()
    .email("Email không hợp lệ")
    .min(1, "Email là bắt buộc"),
  
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số")
    .optional()
    .or(z.literal("")),
  
  interests: z
    .array(z.string())
    .min(1, "Vui lòng chọn ít nhất một sản phẩm bạn quan tâm"),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

/**
 * Product interest options for the form
 */
export const PRODUCT_INTERESTS = [
  { id: "tarot", label: "Bộ Bài Tarot" },
  { id: "crystals", label: "Pha Lê & Đá Quý" },
  { id: "fengshui", label: "Vật Phẩm Phong Thủy" },
  { id: "incense", label: "Nhang & Tinh Dầu" },
] as const;

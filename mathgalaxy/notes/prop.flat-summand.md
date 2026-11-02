# 平坦的直和项　`prop.flat-summand`　·　说明
根 `../`

**证明**：由「与直和交换」（`prop.tensor-functor-properties`），对每个 $A$ 有自然同构

$$A \otimes_{R} F \;\cong\; (A \otimes_{R} M) \oplus (A \otimes_{R} M_{2}).$$

若 $M$ 与 $M_{2}$ 平坦，右边正合，故左边正合 ✓。

反向：设 $(-) \otimes F$ 正合，对 $f : A \to A_{1}$ 看 $f \otimes F$ 的对角块形式（两个块分别是 $f \otimes M$ 与 $f \otimes M_{2}$）。单射性逐分量判定，故 $f \otimes M$ 单 ✓，$M$ 平坦。

直和情形同理：$(-) \otimes \bigoplus_{i} M_{i} \cong \bigoplus_{i} ((-) \otimes M_{i})$ 正合当且仅当每个分量正合 ✓。∎

📌 注意方向：结论只对**直和**成立。直积没有「逐分量判定」这种便利 —— 张量不保积，所以平坦性对直积并不自动封闭（相干环才保证「平坦模的积仍平坦」）。

# 直和的正合性 $\implies$ 直和项继承平坦
`imp.flat-summand` · 推出 · strong 边 · 根 `../`

`prop.free-flat` 自由模平坦 + `def.split-exact` 分裂短正合列 → `prop.flat-summand` 平坦的直和项

设 $F = M \oplus M_{2}$ 平坦。由「与直和交换」，对每个 $A$ 有自然同构
$$A \otimes_{R} F \;\cong\; (A \otimes_{R} M) \oplus (A \otimes_{R} M_{2}).$$

**（$\Leftarrow$）** 若 $M$ 与 $M_{2}$ 平坦，右边正合，故 $(-) \otimes F$ 正合 ✓。

**（$\implies$）** 设 $(-) \otimes F$ 正合。对任意 $f : A \to A_{1}$，$f \otimes F$ 在分解下是对角块 $\mathrm{diag}(f \otimes M,\ f \otimes M_{2})$。若 $x = (x_{1}, x_{2})$ 被送到零，则两块分别把 $x_{1}$、$x_{2}$ 送到零；单射性逐分量判定，故 $f \otimes M$ 单 ✓，$M$ 平坦。

> 续见 proofs/imp.flat-summand.2.md

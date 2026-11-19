# imp.homotopy-invariant-cohomology
`imp.homotopy-invariant-cohomology` · 推出 · strong 边 · 根 `../`

`def.sheaf-cohomology` 层上同调 + `def.homotopy` 同伦 + `def.cech-cohomology` Čech 上同调 → `cor.homotopy-invariant-cohomology` 层上同调是同伦不变量

**证明第 1 条。** 常值系数下可以用 **Čech 模型**（在紧 Hausdorff 上它就算出真上同调，在一般情形也足够比较）。
- 同伦 $H : X \times [0,1] \to Y$ 把 $Y$ 的覆盖拉到 $X \times [0,1]$ 上。

用 $[0,1]$ 的**有限区间分解** $[0,1] = \bigcup_{k} I_{k}$（相邻交叠也是区间）把它拆成有限段，于是对每个覆盖都能在 Čech 复形之间造出一个**链同伦** $f^{*} \simeq g^{*}$ —— 这一步的核心是「$[0,1]$ 的常值系数 Čech 上同调在正次数为零」（区间分解给出的增广 Čech 复形是可缩的）。
- 链同伦在同调上诱导**同一个**映射，故 $H^{n}(f) = H^{n}(g)$。
**第 2 条。** 设 $g$ 是 $f$ 的同伦逆，即 $f g \simeq \mathrm{id}_{Y}$、$g f \simeq \mathrm{id}_{X}$。

> 续见 proofs/imp.homotopy-invariant-cohomology.2.md

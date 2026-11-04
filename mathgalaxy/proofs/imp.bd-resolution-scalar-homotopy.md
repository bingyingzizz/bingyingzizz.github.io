# 分解存在 $\implies$ 「乘 $p$」可以沿分解同伦地提升
`imp.bd-resolution-scalar-homotopy` · 推出 · strong 边 · 根 `../`

`thm.breen-deligne` Breen–Deligne 分解 → `lem.breen-deligne-scalar-homotopy` 分解上乘 p 与 M 上乘 p 同伦

这条**不是**「分解由它推出」，而是「它是分解本身的性质」，所以前提正是分解的存在性。

分解的每一项是 $\mathbb{Z}\cdot M^{s}$：乘 $p$ 在两个因子（$\mathbb{Z}$ 与 $M^{s}$）上分别作用，得到逐项映射；把它与「在 $M$ 上乘 $p$ 再沿 $\twoheadrightarrow$ 提升」相比，两者的差是 $\mathbb{Z}\cdot M^{s} \to M$ 的零伦映射 —— 逐项构造同伦即可（分解的标准构造里这一步是显式给出的）。

⚠ 本图未收 Breen–Deligne 分解的完整构造（`thm.breen-deligne` 的证明本身是骨架），所以这条同伦也只到「构造上逐项验证」这个程度。

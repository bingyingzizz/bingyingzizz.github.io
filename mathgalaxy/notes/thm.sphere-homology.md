# 球面的同调　`thm.sphere-homology`　·　说明
根 `../`

**$n = 0$ 要单独看清**：$S^{0}$ 是两点，由 `prop.h0-components`，$H_{0}(S^{0}) = \mathbb{Z}^{2}$，约化后 $\tilde{H}_{0}(S^{0}) = \mathbb{Z}$ —— 与 $p = n$ 的约定吻合，所以它是归纳法的**基础情形**。

⚠️ **证明是骨架**，正式证明请查 `refs`。结构与关键步骤：
① 取两个**开**集 $U := S^{n} \setminus \{\text{南极}\}$、$V := S^{n} \setminus \{\text{北极}\}$，它们都同胚于 $\mathbb{R}^{n}$，可缩，故所有约化同调为零（同伦不变性：恒等 $\simeq$ 常值，而常值映射在约化同调上是零）；
② $U \cap V = S^{n} \setminus \{\text{两极}\}$ 沿经线**形变收缩**到赤道 $S^{n-1}$，故 $\tilde{H}_{p}(U \cap V) \cong \tilde{H}_{p}(S^{n-1})$；
③ 代入 Mayer–Vietoris（`thm.mv-homology`）的约化版，两个可缩块的项为零，得对每个 $p$
$$\tilde{H}_{p}(S^{n}) \cong \tilde{H}_{p}(S^{n-1}),$$
④ 从 $S^{0}$ 出发归纳即得结论。

> 续见 notes/thm.sphere-homology.2.md

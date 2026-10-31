# 正交补　`def.orthogonal-complement`　·　说明
根 `../`

⭐ «$V = U \oplus U^{\perp}$» 是内积空间比一般向量空间**多出来的东西**：一般的子空间有补空间但不唯一（见 `def.direct-sum`），而正交补是**唯一**的补空间。

⭐ 它与对偶里的零化子（`def.annihilator`）是一对：$U^{\perp} \subseteq V$、$U^{0} \subseteq V^{\ast}$，两者的维数公式长得一样（$\dim V - \dim U$），在「$V \cong V^{\ast}$（靠内积）」之下互相翻译。

⚠ $V = U \oplus U^{\perp}$ 在**无限维**时对闭子空间才成立，任意子空间不成立（这是 Hilbert 空间理论的一个真定理）。

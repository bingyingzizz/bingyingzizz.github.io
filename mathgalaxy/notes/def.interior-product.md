# 内乘　`def.interior-product`　·　说明
根 `../`

**为什么它是「逐点」的而 Lie 导数是「整体」的**：内乘只用 $X_{p}$ 就能算出 $(\iota_{X}\omega)_{p}$，所以它是张量运算（对 $X$ 也 $C^{\infty}$-线性），不需要解任何方程；Lie 导数（`def.lie-derivative`）要对流求导，只对向量场有定义、且对 $X$ 只 $\mathbb{R}$-线性。这条区别在 Cartan 公式（`thm.cartan-formula`）里正好互补：$\mathrm{d}\iota_{X}$ 是「先缩再导」，$\iota_{X}\mathrm{d}$ 是「先导再缩」。

**$\iota_{X}^{2} = 0$ 的理由**：缩两次等于同一个槽被塞进两个向量，而形式是交错的，把两次缩并交换次序会出 $-$ 号，于是 $(\iota_{X}^{2}\omega)(v_{3},\ldots) = \omega(X,X,v_{3},\ldots) = 0$（交错性 + 同一向量自配为零）。

**物理记号里它就是「缩一个指标」**：电磁场 $F = \frac{1}{2}F_{ij}\,\mathrm{d}x^{i}\wedge\mathrm{d}x^{j}$ 与 $\iota_{E}F$ 给出「电场方向上的磁场通量」这类量；Maxwell 方程组里 $\mathrm{d}F = 0$、$\mathrm{d}\star F = J$，其中 $\star$ 依赖度量，而 $\iota$ 与 $\mathrm{d}$ 是纯组合的。

> 续见 notes/def.interior-product.2.md

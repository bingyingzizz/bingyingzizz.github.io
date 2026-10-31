# Lie 群　`def.lie-group`　·　说明
根 `../`

**「取逆光滑」其实可以省掉**：只假设乘法光滑，则每个 $L_{g}$、$R_{g}$ 光滑；由隐函数定理 $i$ 在 $e$ 附近光滑，再用 $i = L_{g^{-1}} \circ i \circ R_{g^{-1}}$ 搬到各处。本图按习惯把两条都写进定义，省掉一次对隐函数定理的引用。

**$\operatorname{GL}(n,\mathbb{R})$ 为什么是流形**：$\det : \mathbb{R}^{n^{2}} \to \mathbb{R}$ 连续，$\mathbb{R}\setminus\{0\}$ 开，所以 $\det^{-1}(\mathbb{R}\setminus\{0\})$ 在 $\mathbb{R}^{n^{2}}$ 里开 —— 一张卡就够，$\varphi = \operatorname{id}$。这是「开子集继承流形结构」最省事的例子。

**$\operatorname{O}(n)$ 为什么是流形**：它是 $F(A) = A^{\mathsf{T}}A - I$ 的零点集，$\mathrm{d}F_{A}(B) = A^{\mathsf{T}}B + B^{\mathsf{T}}A$ 在 $F^{-1}(0)$ 上满射（给定对称的 $S$，取 $B = AS/2$ 即得），于是由 `thm.regular-level-set` 得 $\dim = n^{2} - n(n+1)/2 = n(n-1)/2$。群结构由「正交矩阵之积仍正交」给出。

> 续见 notes/def.lie-group.2.md

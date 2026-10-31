# 标量扩张与限制互为伴随　`prop.scalar-extension-adjunction`　·　说明
根 `../`

**证明**：$S$-线性映射 $g : S \otimes_{R} M \to P$ 首先是 $R$-线性映射，于是被 $m \mapsto g(1 \otimes m)$ 决定（因为 $s \otimes m = s(1 \otimes m)$）；反过来，给定 $R$-线性 $\varphi : M \to P$，$S$-平衡式 $(s, m) \mapsto s \varphi(m)$ 良定义，由万有性质唯一给出 $S$-线性映射 $S \otimes_{R} M \to P$。两个方向互逆，公式里没有选取，故自然 ✓。

三角恒等式：$\varepsilon_{S \otimes M} \circ (S \otimes \eta_{M}) = \mathrm{id}$ 与 $f_{\ast}\varepsilon_{P} \circ \eta_{f_{\ast}P} = \mathrm{id}$ 在纯张量（或 $M$ 的元素）上验证，再线性延拓 ✓。∎

⭐ **「最自由」的精确含义**：任何把 $M$ 送进某个 $S$-模、且与 $R$-作用相容的映射，都唯一地穿过 $1 \otimes -$。所以 $S \otimes_{R} M$ 是「$M$ 在 $S$-模范畴里的像」的标准答案。

**立刻可得**：$S \otimes_{R} -$ 右正合、保余极限（左伴随）；$f_{\ast}$ 左正合（右伴随），实际上正合。

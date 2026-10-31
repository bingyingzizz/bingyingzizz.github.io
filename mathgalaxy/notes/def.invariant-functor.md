# 不变量函子　`def.invariant-functor`　·　说明
根 `../`

⭐ **一句话**：$(-)^{G}$ 就是「取不动点」。它把群作用的信息压到 $R$-模上，是群上同调的起点（$H^{0} = (-)^{G}$）。

**为什么是 $\operatorname{Hom}_{R[G]}(R, -)$**：$R[G]$-线性映射 $f : R \to M$ 由 $f(1)$ 决定，而 $f(1) = f(g \cdot 1) = g \cdot f(1)$，所以 $f(1) \in M^{G}$；反过来任给 $m \in M^{G}$ 都能这样定义 $f$。于是 $(-)^{G} = \operatorname{Hom}_{R[G]}(R, -)$ —— 它对第二个变量左正合。

**左正合但不右正合**：短正合列 $0 \to L \to M \to N \to 0$ 取不变量只得到

$$0 \longrightarrow L^{G} \longrightarrow M^{G} \longrightarrow N^{G},$$

右边**接不上**。典型反例：$G = \mathbb{Z}/2$ 以符号作用在 $\mathbb{Z}$ 上，取 $0 \to \mathbb{Z} \xrightarrow{\cdot 2} \mathbb{Z} \to \mathbb{Z}/2 \to 0$，则 $M^{G} = 0$ 而 $N^{G} = \mathbb{Z}/2$，$M^{G} \to N^{G}$ 不是满射。

⚠️ **对偶那一侧不是它**：$M \mapsto M_{G} := M\big/\langle g m - m \rangle$（余不变量）右正合，对应群**同调** $H_{n}(G, M)$。本图只走**上**同调这条线。

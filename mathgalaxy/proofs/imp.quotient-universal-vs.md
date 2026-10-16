# 商映射 $\implies$ 万有性质
`imp.quotient-universal-vs` · 推出 · strong 边 · 根 `../`

`def.quotient-vs` 商空间 → `thm.quotient-universal-vs` 商空间的万有性质

设 $T : V \to W$ 线性且 $U \subseteq \ker T$。

**存在性**：令 $\overline{T}(v + U) := T(v)$。良定义：若 $v - v' \in U \subseteq \ker T$，则 $T(v - v') = 0$，即 $T(v) = T(v')$。线性同第一同构定理的证明。于是 $\overline{T} \circ \pi = T$ 由定义成立。

**唯一性**：设 $S : V/U \to W$ 也满足 $S \circ \pi = T$。任取 $v + U \in V/U$，则

$$S(v + U) = S(\pi(v)) = T(v) = \overline{T}(v + U)$$

故 $S = \overline{T}$。∎

> 唯一性只用到一个事实：**$\pi$ 是满射**（所以每个陪集都有代表元可用）。这是「万有性质」类定理的共同收尾方式。

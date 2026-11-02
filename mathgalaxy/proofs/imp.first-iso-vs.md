# 核 / 像 / 商空间 $\implies$ 第一同构定理
`imp.first-iso-vs` · 推出 · strong 边 · 根 `../`

`def.kernel-image-vs` 核与像 + `def.quotient-vs` 商空间 → `thm.first-iso-vs` 第一同构定理（向量空间版）

令 $\overline{T}(v + \ker T) := T(v)$。

1. **良定义**：若 $v + \ker T = v' + \ker T$，则 $v - v' \in \ker T$，即 $T(v - v') = 0$，由线性得 $T(v) = T(v')$。所以 $\overline{T}$ 只依赖陪集。
2. **线性**：$\overline{T}\bigl((v + \ker T) + c(v' + \ker T)\bigr) = \overline{T}\bigl((v + cv') + \ker T\bigr) = T(v + cv') = T(v) + cT(v')$。
3. **单射**：若 $\overline{T}(v + \ker T) = 0$，则 $T(v) = 0$，即 $v \in \ker T$，于是 $v + \ker T$ 是零陪集。故 $\ker \overline{T} = \{0\}$，$\overline{T}$ 单。
4. **满射**：$\operatorname{im} \overline{T} = \operatorname{im} T$ 由定义直接得到。

> 续见 proofs/imp.first-iso-vs.2.md

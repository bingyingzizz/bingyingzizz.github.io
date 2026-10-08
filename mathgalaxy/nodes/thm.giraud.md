# Giraud 定理　`thm.giraud`
Giraud 定理
layer 17 · 定理 · 拓扑斯 · 范畴论

对范畴 $\mathcal{T}$，下列四条等价：

1. $\mathcal{T}$ 是拓扑斯；
2. $\mathcal{T}$ 上对**标准拓扑**而言的层都是**可表示的**，且存在小生成元集；
3. 存在 site $\mathcal{C}$ 使 $\mathcal{T} \simeq \widehat{\mathcal{C}}$；
4. 存在范畴使 $\mathcal{T}$ 是它的**反射子范畴**，且反射**正合**（保有限极限）。

## 为什么成立（入边，证明在 proofs/）
- `def.topos` 拓扑斯 + `def.canonical-topology` 标准拓扑 + `def.generator` 生成元集 + `lem.representable-quotient` 可表示性的下降：Giraud 定理的证明　proofs/imp.giraud.md
- `def.topos` 拓扑斯：用到了定义 拓扑斯　proofs/def-dep.topos-giraud.md
- `def.canonical-topology` 标准拓扑：用到了定义 标准拓扑　proofs/def-dep.canonical-giraud.md
- `def.representable` 表示函子：用到了定义 表示函子　proofs/def-dep.representable-giraud.md

> 说明见 `notes/thm.giraud.md`

## 它能推出什么 / 谁在用它
- …另有出边，续页见 `nodes/thm.giraud.2.md`

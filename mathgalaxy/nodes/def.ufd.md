# 唯一分解整环　`def.ufd`
唯一分解整环（UFD）：分解存在且唯一
layer 11 · 定义 · 整环与分解 · 抽象代数
[在星图里打开](../#n=def.ufd)　·　[节点索引](../index.md)

整环 $A$ 叫**唯一分解整环**（UFD），若

1. **存在性**：每个非零非单位元 $a$ 都能写成有限多个不可约元的乘积；
2. **唯一性**：两个这样的分解只差次序与相伴（即把因子逐个配对成相伴元）。

## 为什么成立（入边，证明在 proofs/）
- [`def.pid`](../nodes/def.pid.md) 主理想整环：PID $\implies$ UFD：升链条件给存在性，不可约=素给唯一性　[proofs/imp.ring-pid-ufd.md](../proofs/imp.ring-pid-ufd.md)

- …另有入边，续页见 [nodes/def.ufd.2.md](./def.ufd.2.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.fundamental-arithmetic`](../nodes/thm.fundamental-arithmetic.md) 算术基本定理 用

- …另有出边，续页见 [nodes/def.ufd.3.md](./def.ufd.3.md)

refs: Atiyah–Macdonald, Ch. 1；Kaplansky, Commutative Rings, Ch. 1

> 说明见 `notes/def.ufd.md`

引用：`def.ufd`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

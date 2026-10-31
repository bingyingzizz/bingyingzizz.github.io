# Euclid 整环　`def.euclidean-domain`
Euclid 整环：带余除法成立
layer 9 · 定义 · 整环与分解 · 抽象代数
[在星图里打开](../#n=def.euclidean-domain)　·　[节点索引](../index.md)

整环 $A$ 叫 **Euclid 整环**，若存在函数 $N : A \setminus \{0\} \to \mathbb{N}$（**欧几里得函数**），使对任意 $a \in A$、$b \ne 0$，存在 $q, r \in A$ 满足

$$a = q b + r, \qquad r = 0 \ \text{或}\ N(r) < N(b) .$$

## 为什么成立（入边，证明在 proofs/）
- [`def.int-domain`](../nodes/def.int-domain.md) 整环：用到了定义 整环　[proofs/e127:definition.md](../proofs/e127:definition.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.euclidean-domain.2.md](./def.euclidean-domain.2.md)

refs: Borevich–Shafarevich, Number Theory, Ch. 1；Atiyah–Macdonald, Ch. 1

> 说明见 `notes/def.euclidean-domain.md`

引用：`def.euclidean-domain`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

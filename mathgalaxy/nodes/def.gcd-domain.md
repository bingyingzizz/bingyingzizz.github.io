# gcd 整环　`def.gcd-domain`
gcd 整环：任意两元素都有最大公因子
layer 12 · 定义 · 整环与分解 · 抽象代数
[在星图里打开](../#n=def.gcd-domain)　·　[节点索引](../index.md)

整环 $A$ 叫 **gcd 整环**，若任意 $a, b \in A$ 都有**最大公因子**：存在 $d$ 使

$$d \mid a,\quad d \mid b,\quad \text{且任何 } c \mid a,\ c \mid b \text{ 都有 } c \mid d .$$

注意「最大」是**整除意义下的最大下界**，不是大小比较 —— 整环上没有全序。

## 为什么成立（入边，证明在 proofs/）
- [`def.ufd`](../nodes/def.ufd.md) 唯一分解整环：UFD $\implies$ gcd 整环：取公共素因子指数的最小值　[proofs/imp.ring-ufd-gcd.md](../proofs/imp.ring-ufd-gcd.md)

- …另有入边，续页见 [nodes/def.gcd-domain.2.md](./def.gcd-domain.2.md)

refs: Kaplansky, Commutative Rings, Ch. 1

> 说明见 `notes/def.gcd-domain.md`

引用：`def.gcd-domain`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

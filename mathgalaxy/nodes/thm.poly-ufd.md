# K[x] 是唯一分解整环　`thm.poly-ufd`
定理：$K[x]$ 是唯一分解整环
layer 11 · 定理 · 多项式与因式分解 · 抽象代数
[在星图里打开](../#n=thm.poly-ufd)　·　[节点索引](../index.md)

设 $K$ 是域。则每个非零、非单位的多项式 $f \in K[x]$ 都可以写成有限多个不可约多项式的乘积

$$f = c\, p_1 p_2 \cdots p_r, \qquad c \in K^{\times},\ p_i \text{ monic irreducible}$$

而且分解**唯一**到顺序与常数因子：若 $f = c' q_1 \cdots q_s$ 是另一种这样的分解，则 $r = s$ 且存在置换 $\sigma$ 使 $p_i = q_{\sigma(i)}$（当然 $c = c'$）。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.primary-decomposition`](../nodes/thm.primary-decomposition.md) 根子空间分解

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.poly-ufd.2.md](./thm.poly-ufd.2.md)

refs: Lang, Algebra, Ch. IV；Dummit–Foote, Abstract Algebra, Ch. 9

> 说明见 `notes/thm.poly-ufd.md`

引用：`thm.poly-ufd`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

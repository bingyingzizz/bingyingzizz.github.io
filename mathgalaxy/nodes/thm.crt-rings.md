# 中国剩余定理（环论形式）　`thm.crt-rings`
中国剩余定理：互素理想给出环的直积分解
layer 10 · 定理 · 整环与分解 · 抽象代数
[在星图里打开](../#n=thm.crt-rings)　·　[节点索引](../index.md)

设 $I, J$ 是环 $A$ 的两个理想且 $I + J = A$。则

$$A/(I \cap J) \;\cong\; A/I \times A/J, \qquad a \longmapsto (a \bmod I,\ a \bmod J) .$$

更一般地：若 $I_{1}, \cdots, I_{k}$ 两两互素，则

$$A\Big/\bigcap_{i} I_{i} \;\cong\; \prod_{i=1}^{k} A/I_{i} .$$

## 为什么成立（入边，证明在 proofs/）
- [`def.ideal`](../nodes/def.ideal.md) 理想：用到了定义 理想　[proofs/e131:definition.md](../proofs/e131:definition.md)

- …另有入边，续页见 [nodes/thm.crt-rings.2.md](./thm.crt-rings.2.md)

## 它能推出什么 / 谁在用它
- ～弱边 [`thm.crt`](../nodes/thm.crt.md) 中国剩余定理

refs: Atiyah–Macdonald, Ch. 1；Borevich–Shafarevich, Number Theory, Ch. 2

> 说明见 `notes/thm.crt-rings.md`

引用：`thm.crt-rings`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

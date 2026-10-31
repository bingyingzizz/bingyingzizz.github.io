# Legendre 符号　`def.legendre-symbol`
Legendre 符号 $\left(\frac{a}{p}\right)$
layer 14 · 定义 · 二次剩余与原根 · 数论
[在星图里打开](../#n=def.legendre-symbol)　·　[节点索引](../index.md)

设 $p$ 是奇素数，$p \nmid a$。定义

$$\left(\frac{a}{p}\right) := \begin{cases} 1, & a\ \text{是模}\ p\ \text{的二次剩余}, \\ -1, & a\ \text{是二次非剩余} . \end{cases}$$

补充规定 $\left(\frac{a}{p}\right) = 0$ 当 $p \mid a$。

## 为什么成立（入边，证明在 proofs/）
- [`def.quadratic-residue`](../nodes/def.quadratic-residue.md) 二次剩余：用到了定义 二次剩余　[proofs/e149:definition.md](../proofs/e149:definition.md)

- …另有入边，续页见 [nodes/def.legendre-symbol.2.md](./def.legendre-symbol.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.legendre-symbol.3.md](./def.legendre-symbol.3.md)

refs: 华罗庚《数论导引》第四章

> 说明见 `notes/def.legendre-symbol.md`

引用：`def.legendre-symbol`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

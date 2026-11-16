# 域的特征　`def.characteristic`
域的特征：$1$ 加多少次回到 $0$
layer 10 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.characteristic)　·　[节点索引](../index.md)

**在做什么**：给域配一个数，记「$1$ 要加多少次才回到 $0$」。它决定了域里能不能做除法以外的「模 $p$ 运算」，也决定素域是哪个。

设 $K$ 是域。考虑唯一环同态

$$\varphi : \mathbb{Z} \to K, \qquad \varphi(n) = \underbrace{1 + 1 + \cdots + 1}_{n} .$$

它的核是 $\mathbb{Z}$ 的理想，故为 $(0)$ 或 $(p)$（$p$ 素数）。称
> 陈述续见 [nodes/def.characteristic.2.md](./def.characteristic.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.separable-extension`](../nodes/def.separable-extension.md) 可分扩张 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.characteristic.3.md](./def.characteristic.3.md)

refs: Dummit–Foote, Abstract Algebra；北大《高等代数》· 域的特征与素域

> 说明见 `notes/def.characteristic.md`

引用：`def.characteristic`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

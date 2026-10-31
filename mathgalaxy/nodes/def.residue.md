# 留数　`def.residue`
定义：留数
layer 18 · 定义 · 留数与辐角原理 · 复变函数
[在星图里打开](../#n=def.residue)　·　[节点索引](../index.md)

**白话**：留数是 $f$ 在孤立奇点附近 Laurent 展开里 $(z - a)^{-1}$ 那一项的系数 —— 也是沿小圆周积分再除以 $2\pi i$ 得到的那个数。

设 $a$ 是 $f$ 的孤立奇点，$f$ 在 $D(a, \varepsilon) \setminus \{a\}$ 上全纯。定义

$$\operatorname{Res}(f, a) := \frac{1}{2\pi i}\oint_{|\zeta - a| = r} f(\zeta)\,\mathrm{d}\zeta, \qquad 0 < r < \varepsilon,$$

这个值与 $r$ 无关，且等于 $f$ 在 $a$ 处 Laurent 展开的系数 $c_{-1}$。
> 陈述续见 [nodes/def.residue.2.md](./def.residue.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.residue`](../nodes/thm.residue.md) 留数定理

- …另有出边，续页见 [nodes/def.residue.4.md](./def.residue.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.residue.3.md](./def.residue.3.md)

refs: 王晓光《复变函数》笔记，第 23 章 · 留数定理；Ahlfors, Complex Analysis, Ch. 4 · Complex Integration

> 说明见 `notes/def.residue.md`

引用：`def.residue`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

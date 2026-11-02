# ℤ 是交换整环　`thm.int-ring`
定理：$\mathbb{Z}$ 是含幺交换整环，且序与运算相容
layer 9 · 定理 · 数系的构造 · 集合论
[在星图里打开](../#n=thm.int-ring)　·　[节点索引](../index.md)

在 $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/{\sim}$ 上取 `def.int` 定义的运算与序。则：

**(i)** 两个运算**良定义**（与代表元的选取无关）；

**(ii)** $(\mathbb{Z}, +, \cdot)$ 是**含幺交换环**；

**(iii)** $\mathbb{Z}$ **无零因子**（是整环）：$xy = 0 \implies x = 0$ 或 $y = 0$；

**(iv)** $\le$ 是全序，且与运算相容：$x \le y \implies x + z \le y + z$，$x \le y,\ 0 \le z \implies xz \le yz$；
> 陈述续见 [nodes/thm.int-ring.2.md](./thm.int-ring.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.rat-ordered-field`](../nodes/thm.rat-ordered-field.md) ℚ 是有序域

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.int-ring.3.md](./thm.int-ring.3.md)

refs: Kunen, Set Theory, Ch. I；Enderton, Elements of Set Theory, Ch. 4

> 说明见 `notes/thm.int-ring.md`

引用：`thm.int-ring`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

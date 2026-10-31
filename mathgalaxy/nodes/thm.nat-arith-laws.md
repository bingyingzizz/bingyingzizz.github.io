# 自然数的运算律　`thm.nat-arith-laws`
定理：$\mathbb{N}$ 上加法与乘法的运算律（Laws of Arithmetic on $\mathbb{N}$）
layer 8 · 定理 · 数系的构造 · 集合论
[在星图里打开](../#n=thm.nat-arith-laws)　·　[节点索引](../index.md)

在 $\mathbb{N} = \omega$ 上取 `def.nat-arith` 定义的加法与乘法。则对一切 $m, n, k \in \mathbb{N}$：

$$0 + n = n, \qquad S(m) + n = S(m + n),$$

$$m + n = n + m, \qquad (m + n) + k = m + (n + k),$$

$$m \cdot 0 = 0, \qquad m \cdot n = n \cdot m, \qquad (m n) k = m (n k), \qquad m(n + k) = m n + m k,$$

以及**消去律**
> 陈述续见 [nodes/thm.nat-arith-laws.2.md](./thm.nat-arith-laws.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`prop.power-rules`](../nodes/prop.power-rules.md) 指数律与幂的单调性

- …另有出边，续页见 [nodes/thm.nat-arith-laws.4.md](./thm.nat-arith-laws.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.nat-arith-laws.3.md](./thm.nat-arith-laws.3.md)

refs: Kunen, Set Theory, Ch. I；Enderton, Elements of Set Theory, Ch. 4

> 说明见 `notes/thm.nat-arith-laws.md`

引用：`thm.nat-arith-laws`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

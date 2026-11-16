# Euler 函数　`def.euler-phi`
Euler 函数与它的乘积公式
layer 11 · 定义 · 整除与同余 · 数论
[在星图里打开](../#n=def.euler-phi)　·　[节点索引](../index.md)

对 $n \ge 1$，$\varphi(n)$ 是 $1, 2, \cdots, n$ 中与 $n$ 互素的整数个数：

$$\varphi(n) = \#\{\, 1 \le a \le n : \gcd(a, n) = 1 \,\} .$$

若 $n = p_{1}^{e_{1}} \cdots p_{r}^{e_{r}}$（$p_{i}$ **两两不同**；$n = 1$ 取空积），则

$$\varphi(n) = n \prod_{i=1}^{r} \left( 1 - \frac{1}{p_{i}} \right).$$

## 为什么成立（入边，证明在 proofs/）
- [`def.zmodn`](../nodes/def.zmodn.md) 剩余类环：$\varphi(n)$ 与单位群的阶　[proofs/e123.definition.md](../proofs/e123.definition.md)

- …另有入边，续页见 [nodes/def.euler-phi.2.md](./def.euler-phi.2.md)

## 它能推出什么 / 谁在用它
- ～弱边 [`def.zmodn`](../nodes/def.zmodn.md) 剩余类环

- …另有出边，续页见 [nodes/def.euler-phi.3.md](./def.euler-phi.3.md)

refs: 华罗庚《数论导引》第三章

> 说明见 `notes/def.euler-phi.md`

引用：`def.euler-phi`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

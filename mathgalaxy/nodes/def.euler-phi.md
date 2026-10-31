# Euler 函数　`def.euler-phi`
Euler 函数 $\varphi(n)$ 与它的乘积公式
layer 13 · 定义 · 整除与同余 · 数论
[在星图里打开](../#n=def.euler-phi)　·　[节点索引](../index.md)

对 $n \ge 1$，$\varphi(n)$ 是 $1, 2, \cdots, n$ 中与 $n$ 互素的整数个数：

$$\varphi(n) = \#\{\, 1 \le a \le n : \gcd(a, n) = 1 \,\} .$$

若 $n = p_{1}^{e_{1}} \cdots p_{r}^{e_{r}}$，则

$$\varphi(n) = n \prod_{i=1}^{r} \left( 1 - \frac{1}{p_{i}} \right).$$

## 为什么成立（入边，证明在 proofs/）
- [`def.zmodn`](../nodes/def.zmodn.md) 剩余类环：用到了定义 剩余类环　[proofs/e117:definition.md](../proofs/e117:definition.md)

refs: 华罗庚《数论导引》第三章

> 说明见 `notes/def.euler-phi.md`

引用：`def.euler-phi`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

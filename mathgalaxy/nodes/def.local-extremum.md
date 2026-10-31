# 局部极值　`def.local-extremum`
局部极大与局部极小
layer 16 · 定义 · 微分中值定理与 Taylor · 数学分析
[在星图里打开](../#n=def.local-extremum)　·　[节点索引](../index.md)

设 $f$ 在 $x_0$ 的某个邻域上有定义。称 $x_0$ 是 $f$ 的

- **局部极大值点**：存在 $\delta > 0$，使 $|x - x_0| < \delta$ 时 $f(x) \le f(x_0)$；
- **局部极小值点**：存在 $\delta > 0$，使 $|x - x_0| < \delta$ 时 $f(x) \ge f(x_0)$。

两者统称**局部极值点**。把 $\le$、$\ge$ 换成 $<$、$>$（对 $x \ne x_0$）就得到**严格**局部极值。
> 陈述续见 [nodes/def.local-extremum.2.md](./def.local-extremum.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.fermat`](../nodes/thm.fermat.md) Fermat 引理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.local-extremum.3.md](./def.local-extremum.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5；Spivak, Calculus, Ch. 11

> 说明见 `notes/def.local-extremum.md`

引用：`def.local-extremum`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

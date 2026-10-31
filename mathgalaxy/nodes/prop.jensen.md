# Jensen 公式　`prop.jensen`
Jensen 公式：零点个数被平均值控制
layer 23 · 命题 · 解析延拓与整函数 · 复变函数
[在星图里打开](../#n=prop.jensen)　·　[节点索引](../index.md)

设 $f$ 在 $|z| \le R$ 上全纯、$f(0) \ne 0$，零点为 $z_{1}, \ldots, z_{n}$（按重数计，$0 < |z_{j}| \le R$）。则
> 陈述续见 [nodes/prop.jensen.2.md](./prop.jensen.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`prop.zero-isolated`](../nodes/prop.zero-isolated.md) 零点的孤立性与阶 + [`thm.harmonic-mean-value`](../nodes/thm.harmonic-mean-value.md) 调和函数的均值性质：Blaschke 因子除掉零点，再用调和函数的均值性质　[proofs/e25:implication.md](../proofs/e25:implication.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/prop.jensen.3.md](./prop.jensen.3.md)

refs: 王晓光《复变函数》· Jensen 公式与零点计数；Ahlfors, Complex Analysis (3rd ed.), Ch. 8 §2.3 · Jensen’s Formula；Stein–Shakarchi, Complex Analysis, Ch. 8 §8.4 · Jensen’s formula

> 说明见 `notes/prop.jensen.md`

引用：`prop.jensen`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

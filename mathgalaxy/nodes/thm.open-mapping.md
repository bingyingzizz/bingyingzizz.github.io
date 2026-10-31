# 开映射定理　`thm.open-mapping`
开映射定理：非常数全纯函数把开集映成开集
layer 23 · 定理 · 共形映射与正规族 · 复变函数
[在星图里打开](../#n=thm.open-mapping)　·　[节点索引](../index.md)

设 $f$ 在区域 $\Omega$ 上全纯且**不是常数**。则 $f$ 是开映射：$\Omega$ 中每个开集的像都是开集。

推论：
> 陈述续见 [nodes/thm.open-mapping.2.md](./thm.open-mapping.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`thm.rouche`](../nodes/thm.rouche.md) Rouché 定理 + [`thm.max-modulus`](../nodes/thm.max-modulus.md) 最大模原理：Rouché 数零点 $\implies$ 像含小圆盘 $\implies$ 开映射　[proofs/e12:implication.md](../proofs/e12:implication.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.open-mapping.3.md](./thm.open-mapping.3.md)

refs: 王晓光《复变函数》· 开映射定理与单叶解析函数；Ahlfors, Complex Analysis (3rd ed.), Ch. 5 §3.1 · The Open Mapping Theorem

> 说明见 `notes/thm.open-mapping.md`

引用：`thm.open-mapping`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

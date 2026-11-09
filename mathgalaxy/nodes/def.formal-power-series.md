# 形式幂级数　`def.formal-power-series`
形式幂级数：只做形式运算，不谈收敛
layer 17 · 定义 · 函数列、幂级数与初等函数 · 数学分析
[在星图里打开](../#n=def.formal-power-series)　·　[节点索引](../index.md)

设 $R$ 是交换环。一个 $R$ 上的**形式幂级数**是一列系数 $(a_n)_{n \ge 0}$（$a_n \in R$），形式地写成
$$\sum_{n \ge 0} a_n x^n .$$
它在 $R[[x]]$ 中：加法逐项相加，乘法用 Cauchy 乘积
$$\Bigl(\sum a_n x^n\Bigr)\Bigl(\sum b_n x^n\Bigr) := \sum_{n \ge 0}\Bigl(\sum_{k=0}^{n} a_k b_{n-k}\Bigr)x^n .$$
$x$ 只是一个**形式变量**；$
> 陈述续见 [nodes/def.formal-power-series.2.md](./def.formal-power-series.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.formal-power-series.3.md](./def.formal-power-series.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.formal-power-series.4.md](./def.formal-power-series.4.md)

refs: Stanley, Enumerative Combinatorics, Vol. 1；Wilf, generatingfunctionology

> 说明见 `notes/def.formal-power-series.md`

引用：`def.formal-power-series`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

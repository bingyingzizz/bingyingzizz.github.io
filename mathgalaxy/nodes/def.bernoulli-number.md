# 伯努利数　`def.bernoulli-number`
Bernoulli 数：递推与生成函数
layer 18 · 定义 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=def.bernoulli-number)　·　[节点索引](../index.md)

**Bernoulli 数** $B_n$ 由 $B_0=1$ 与递推
$$\sum_{k=0}^{n}\binom{n+1}{k}B_k=0\qquad(n\ge1)$$
确定。等价地，作为形式幂级数（`def.formal-power-series`）
$$\frac{t}{e^t-1}=\sum_{n\ge0}B_n\frac{t^n}{n!}.$$
前几项：$B_0=1$，$B_1=-\tfrac12$，$B_2=\tfrac16$，$B_3=0$，$B_4=-\tfrac1{30}$，$B_6=\tfrac1{42}$；且 $B_{2k
> 陈述续见 [nodes/def.bernoulli-number.2.md](./def.bernoulli-number.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.bernoulli-number.3.md](./def.bernoulli-number.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.bernoulli-number.4.md](./def.bernoulli-number.4.md)

refs: Aigner–Ziegler, Proofs from THE BOOK；Graham–Knuth–Patashnik, Concrete Mathematics, Ch. 6

> 说明见 `notes/def.bernoulli-number.md`

引用：`def.bernoulli-number`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

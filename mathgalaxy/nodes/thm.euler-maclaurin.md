# 欧拉–麦克劳林公式　`thm.euler-maclaurin`
Euler–Maclaurin 求和公式
layer 27 · 定理 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=thm.euler-maclaurin)　·　[节点索引](../index.md)

设 $f\in C^{2m}[a,b]$，$a<b$ 为整数。记 $B_n(\{x\})$ 为周期 Bernoulli 多项式（$B_1(\{x\})=\{x\}-\tfrac12$）。则
$$\sum_{k=a}^{b}f(k)=\int_a^b f(x)\,dx+\frac{f(a)+f(b)}{2}+\sum_{r=1}^{m}\frac{B_{2r}}{(2r)!}\bigl(f^{(2r-1)}(b)-f^{(2r-1)}(a)\bigr)+R_m,$$
其中余项
$$R_m=-\int_a^b\frac{B_{2m}(\{x\})
> 陈述续见 [nodes/thm.euler-maclaurin.2.md](./thm.euler-maclaurin.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.euler-maclaurin.3.md](./thm.euler-maclaurin.3.md)

refs: Apostol, Mathematical Analysis, Ch. 12；Graham–Knuth–Patashnik, Concrete Mathematics, Ch. 9

> 说明见 `notes/thm.euler-maclaurin.md`

引用：`thm.euler-maclaurin`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

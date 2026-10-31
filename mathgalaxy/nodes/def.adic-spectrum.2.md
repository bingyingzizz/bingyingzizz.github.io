# adic 谱 Spa　`def.adic-spectrum`　·　续页（第 2 页）
[在星图里打开](../#n=def.adic-spectrum)　·　第 1 页 [nodes/def.adic-spectrum.md](./def.adic-spectrum.md)

## 陈述（续）
先约定术语。**赋值**是「量大小」的函数 $|\cdot| : A \to \Gamma \cup \{0\}$（$\Gamma$ 是乘法写法的全序阿贝尔群，想成 $\mathbb{R}_{>0}$ 即可），满足

$$|0| = 0, \quad |1| = 1, \quad |xy| = |x|\,|y|, \quad |x + y| \le \max(|x|, |y|).$$
两个赋值 $|\cdot|, |\cdot|_1$ **等价**，如果存在保序的群同构使 $|x|_1 = \sigma(|x|)$ 对一切 $x$ —— 也就是「它们给 $A$ 排出的大小顺序完全一样」，只是「标尺」换了。$\operatorname{Spa}$ 取的是赋值的**等价类**（所以同一个点不会因为标尺不同重复计数）。直觉：$|x|$ 是「$x$ 到 $0$ 的距离」，$|x| \le 1$ 是「$x$ 有界」；$p$-进绝对值 $|p^{n}u| = p^{-n}$（$u$ 与 $p$ 互
素）就是标准例子。

> 续见 [nodes/def.adic-spectrum.3.md](./def.adic-spectrum.3.md)

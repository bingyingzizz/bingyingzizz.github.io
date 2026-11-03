# 连续 ⟺ 有界　`thm.linear-continuous-bounded`　·　续页（第 2 页）
[在星图里打开](../#n=thm.linear-continuous-bounded)　·　第 1 页 [nodes/thm.linear-continuous-bounded.md](./thm.linear-continuous-bounded.md)

## 陈述（续）
- (1) $\iff$ (2) $\iff$ (3)：**只需要「线性」+「平移」**。线性映射把 $a$ 处的连续性平移到 $0$：$u(x) - u(x_{0}) = u(x - x_{0})$；反过来 $0$ 处连续也平移到任意点。这一步**不用完备性、不用有限维**。
- (3) $\implies$ (4)：**只用 $\varepsilon$-$\delta$ 的定义**。取 $\varepsilon = 1$，得 $\delta > 0$
 使 $\lVert x\rVert \le \delta \implies \lVert u(x)\rVert \le 1$；再由齐次性 $\lVert u(x)\rVert \le \frac{1}{\delta}\lVert x\rVert$。**注意这里用到的正是线性**（齐次性），非线性映射即使连续也不「有界」。
- (4) $\implies$ (1)：**一行**：$\lVert u(x) - u(y)\rVert \le C\lVert x - y\rVert$。
- (4) $\iff$ (5)：

> 续见 [nodes/thm.linear-continuous-bounded.3.md](./thm.linear-continuous-bounded.3.md)

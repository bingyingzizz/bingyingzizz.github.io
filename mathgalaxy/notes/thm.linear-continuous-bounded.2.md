# 连续 ⟺ 有界　`thm.linear-continuous-bounded`　·　说明
根 `../`

- (1) $\iff$ (2) $\iff$ (3)：**只需要「线性」+「平移」**。线性映射把 $a$ 处的连续性平移到 $0$：$u(x) - u(x_{0}) = u(x - x_{0})$；反过来 $0$ 处连续也平移到任意点。这一步**不用完备性、不用有限维**。
- (3) $\implies$ (4)：**只用 $\varepsilon$-$\delta$ 的定义**。取 $\varepsilon = 1$，得 $\delta > 0$ 使 $\lVert x\rVert \le \delta \implies \lVert u(x)\rVert \le 1$；再由齐次性 $\lVert u(x)\rVert \le \frac{1}{\delta}\lVert x\rVert$。**注意这里用到的正是线性**（齐次性），非线性映射即使连续也不「有界」。
- (4) $\implies$ (1)：**一行**：$\lVert u(x) - u(y)\rVert \le C\lVert x - y\rVert$。
- (4) $\iff$ (5)：**只差一个常数**。有界 $\implies$ Lipschitz（取 $C$）；Lipschitz $\implies$ 有界（$x = 0$ 处取 $C$ 并平移）。
- ⚠️ **「某一点连续」不能弱成「某一点处有界」**：后者对任意映射都无意义（有界性对线性映射才是全局概念）。这一条的实质是「一点连续 $\implies$ 处处连续」，而它**只对线性映射

> 续见 notes/thm.linear-continuous-bounded.3.md

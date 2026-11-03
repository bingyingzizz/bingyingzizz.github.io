# 线性方程组的解结构　`thm.linear-system-solutions`　·　续页（第 3 页）
[在星图里打开](../#n=thm.linear-system-solutions)　·　第 1 页 [nodes/thm.linear-system-solutions.md](./thm.linear-system-solutions.md)　·　上一页 [nodes/thm.linear-system-solutions.2.md](./thm.linear-system-solutions.2.md)

## 陈述（续）
**（不需要域、不需要有限维）：若 $Ax_{0} = b$、$Au = 0$，则 $A(x_{0}+u) = b$；反之两解之差属于 $\ker A$。**仿射子空间不一定是子空间** —— 除非 $b = 0$。
- **$\dim \ker A = n - \operatorname{rank} A$**：**这一步要用秩-零化度定理**（`thm.rank-nullity`），这是唯一的维度输入；它本身要用有限维假设。
- **$m=n$、$\det A \ne 0$ $
\implies$ 唯一解**：这条**只是前两条的特例**（$\det \ne 0 \iff \operatorname{rank} A = n \iff \ker A = 0$），并没有独立内容。

> 续见 [nodes/thm.linear-system-solutions.4.md](./thm.linear-system-solutions.4.md)

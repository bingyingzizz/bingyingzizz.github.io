# 线性方程组的解结构　`thm.linear-system-solutions`　·　续页（第 2 页）
[在星图里打开](../#n=thm.linear-system-solutions)　·　第 1 页 [nodes/thm.linear-system-solutions.md](./thm.linear-system-solutions.md)

## 陈述（续）
其中 $x_0$ 是任一特解；于是解空间的维数是 $n - \operatorname{rank} A$；
- 齐次方程组 $Ax = 0$ 的解空间就是 $\ker A$，维数 $= n - \operatorname{rank} A$；
- 特别地：$m = n$ 且 $\det A \ne 0$ 时解**唯一**，$x = A^{-1}b$。
**四条里哪条是“定理”、哪条只是重述**（这一组常被当成四条并列，其实最后一条依赖前两条）：
- **有解 $\iff \operatorname{rank}A = \operatorname{rank}(A\mid b)$**：**这一步有真内容**，等价于「$b \in \operatorname{col}(A)$」。证明用行化简（Gauss 消元）—— 出现 $0 = c \ne 0$ 的行当且仅当秩不相等。**只用「$K$ 是域」**（域上才能自由消元；$\mathbb{Z}$ 上要换 Smith 标准形）。
- **解集 = 特解 + 齐次解**：**这一步是纯线性

> 续见 [nodes/thm.linear-system-solutions.3.md](./thm.linear-system-solutions.3.md)

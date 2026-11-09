# Lax–Milgram 定理　`thm.lax-milgram`　·　说明
根 `../`

**约定说明。** 本图内积对第一变量线性、对第二变量共轭线性（见 `def.inner-product`、`def.hilbert-space`），所以这里把 $L$ 取成「第一变量线性、第二变量共轭线性」。如果教材把共轭放在第一变量（很多泛函分析书如此），把 $L$ 换成 $(x,y) \mapsto \overline{L(x,y)}$ 即可，$A$ 不变，结论逐字相同。

**第一步：用 Riesz 表示定义 $A$。** 固定 $y \in H$，泛函 $\varphi_y(x) := L(x, y)$ 是连续线性泛函（线性由半双线性，连续性由 (2)：$|\varphi_y(x)| \le M\|y\| \, \|x\|$）。由 Riesz 表示定理（`thm.riesz-hilbert`），存在唯一 $A y \in H$ 使

$$L(x, y) = \langle x, A y \rangle \qquad (x \in H), \qquad \|A y\| = \|\varphi_y\| \le M \|y\| .$$

**第二步：$A$ 线性且 $\|A\| \le M$。** 对 $y, z \in H$、$\alpha, \beta \in \mathbb{K}$，由 $L$ 对第二变量共轭线性（它给出的共轭与内积第二变元的共轭相消），

> 续见 notes/thm.lax-milgram.2.md

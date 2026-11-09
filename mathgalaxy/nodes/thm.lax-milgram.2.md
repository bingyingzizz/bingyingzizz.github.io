# Lax–Milgram 定理　`thm.lax-milgram`　·　续页（第 2 页）
[在星图里打开](../#n=thm.lax-milgram)　·　第 1 页 [nodes/thm.lax-milgram.md](./thm.lax-milgram.md)

## 陈述（续）
1. **半双线性**：$L$ 对第一变量线性，对第二变量共轭线性（与本图内积约定一致）；
2. **有界**：存在 $M > 0$ 使 $|L(x, y)| \le M \|x\| \, \|y\|$ 对一切 $x, y \in H$ 成立；
3. **强制（coercive）**：存在 $\delta > 0$ 使 $|L(x, x)| \ge \delta \|x\|^{2}$ 对
一切 $x \in H$ 成立。
则存在唯一的 $A \in B(H)$ 使

$$L(x, y) = \langle x, A y \rangle \qquad (x, y \in H),$$

且 $\|A\| \le M$。在 (3) 下 $A$ 还可逆、$A^{-1} \in B(H)$，并且

$$\|A^{-1}\| \le \frac{1}{\delta} .$$

> 续见 [nodes/thm.lax-milgram.3.md](./thm.lax-milgram.3.md)

# K-有界正合在完备化下不变　`lem.k-bounded-completion`　·　说明
根 `../`

**作用**：这条把「半范数」的一般情形**归结为 Banach 情形**。于是后面只要在 Banach 层面上证定理，一般情形自动跟着走。

**为什么成立**。

完备化把 $M^{n}$ 嵌成一个**稠密**子空间，而 $K$-有界正合只用到范数不等式与「任取 $\varepsilon > 0$」—— 这类条件在取稠密子空间时**两边都保持**：稠密性保证能在 $M^{n}$ 里找到足够好的逼近，而完备空间的极限点又能落回 $\widehat{M}^{\bullet}$。

**证明（两个方向各算一次 $\varepsilon/2$）。** 先商掉 $M_{0}$（$K$-有界正合在商掉范数为零的元素下不变），于是可设 $M^{\bullet} \subseteq \widehat{M}^{\bullet}$ 是稠密保范嵌入。
- **$\implies$**：给 $s \in \widehat{M}^{n}$ 与 $\varepsilon>0$。

由稠密性取 $t \in M^{n}$ 使 $\|s - t\| \le \frac{\varepsilon}{2(1+K\|d^{n}\|)}$；

由 $M^{\bullet}$ 的 $K$-有界性取 $s' \in M^{n+1}$ 使 $\|t - ds'\| \le K\|dt\| + \frac{\varepsilon}{2}$。

> 续见 notes/lem.k-bounded-completion.2.md

# 预标准拓扑下的层　`prop.precanonical-sheaf`　·　说明
根 `../`

**证明。** 设覆盖族 $(X_{i} \to X)_{i \in I}$（有限、$\coprod_{i}X_{i} \to X$ 满）。层条件是对每个这样的族
$$F(X) \to \prod_{i}F(X_{i}) \rightrightarrows \prod_{i,j}F(X_{i}\times_{X}X_{j})$$
为等化子。
- **「余积变积」**：取单支覆盖 $X \to X$（它当然满），则层条件退化成 $F(X) \cong F(X)$ 的平凡等式 —— 有限余积的层条件要把 $I$ 取成各支自身：对有限族 $(X_{i})$，$\coprod_{i}X_{i} \to \coprod_{i}X_{i}$ 满，层条件给出 $F(\coprod_{i}X_{i}) \cong \prod_{i}F(X_{i})$ ✓（与余积交换 == 与有限积交换，因为 $F$ 是 $\mathbf{Set}$ 值）。
- **「商变核」**：一般族的覆盖条件里，$\coprod_{i}X_{i} \to X$ 是满态射，于是它在预拓扑斯里是**有效满**的：$R := \coprod_{i,j}X_{i}\times_{X}X_{j}$ 是 $\coprod_{i}X_{i}$ 上的等价关系，而 $X$ 是这个关系的商（余等化子）。于是层条件读作 $F(X) \cong \ker\bigl(F(\coprod X_{i}) \rightrightarrows F(R)\bigr)$；再接上「余积变积」就得到陈述里的第一条等式 ✓。反过来取 $X 

> 续见 notes/prop.precanonical-sheaf.2.md

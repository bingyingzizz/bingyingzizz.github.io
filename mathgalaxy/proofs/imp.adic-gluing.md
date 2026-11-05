# 结构层 + 局部化的全忠实 $\implies$ $\infty$-范畴粘合
`imp.adic-gluing` · 推出 · strong 边 · 根 `../`

`thm.adic-structure-sheaf` adic 结构层是层 + `prop.analytic-base-change` 解析环的 base change → `thm.adic-gluing` 导出范畴按无穷范畴粘合

⚠️ **先摆清这条边证的是什么**（本图自查）：**陈述（`thm.adic-gluing`）要的是 $U \mapsto D((\mathcal{O}_X(U),\mathcal{O}_X^+(U))_\blacksquare)$ 是 $\infty$-范畴层**（导出范畴的下降）；而下面的论证是**普通（1-范畴）层面**的粘合 —— adic 空间的层性、全忠实、纤维积、覆盖细化。两者**不是同一件事**：从「仿射开集的导出范畴能粘」到「整个 $X$ 上的 $D$ 是 $\infty$-范畴层」，要额外做**导出下降**（把 Čech 神经每个交叠处的基变换换成导出张量，并证明那个 $\infty$-极限确实算作 $D(\mathcal{O}_{X,\blacksquare})$），这一步本图**没有证** —— 陈述所引的那条定理就是它，而本图手上没有那一节的原文。所以本边只算「几何侧的

> 续见 proofs/imp.adic-gluing.2.md

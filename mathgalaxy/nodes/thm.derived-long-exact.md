# 导出函子的长正合列　`thm.derived-long-exact`
短正合列 $\implies$ 右导出函子的长正合列
layer 17 · 定理 · 复形与导出三角 · 同调代数

任意短正合列 $0 \to K^{\bullet} \to L^{\bullet} \to M^{\bullet} \to 0$（在 $C^{+}(\mathcal{A})$ 里）给出长正合列

## 为什么成立（入边，证明在 proofs/）
- `def.right-derived-functor` 右导出函子：用到了定义 右导出函子　proofs/def-dep.derlex-rdf.md
- `thm.long-exact` 长正合列：用到了定义 长正合列　proofs/def-dep.derlex-longexact.md

## 说明
$$\cdots \to R^{n}FK^{\bullet} \to R^{n}FL^{\bullet} \to R^{n}FM^{\bullet} \xrightarrow{\ \delta\ } R^{n+1}FK^{\bullet} \to \cdots$$

⭐ **这就是「求导」的全部收益**：原来 $F$ 只给半条，$RF$ 把连接同态 $\delta$ 补上，长正合列就活了。

📌  **Theorem 7.2.8**。

# 足够多内射对象　`thm.mod-enough-injectives`　·　说明
根 `../`

**第 1 步的细节**：给定 $0 \ne a \in A$，子群 $\langle a \rangle$ 是循环群（$\cong \mathbb{Z}/m$，$m \ge 1$；或 $\cong \mathbb{Z}$），上面存在非零特征标 $\langle a \rangle \to \mathbb{Q}/\mathbb{Z}$，再用 $\mathbb{Q}/\mathbb{Z}$ 的内射性把它延拓到 $A$ 上，故求值映射在 $a$ 处不为零 ✓。

**第 3 步的细节**：$\operatorname{Hom}_{\mathbb{Z}}(R, -) : \mathbf{Ab} \to R\text{-}\mathbf{Mod}$ 是遗忘函子 $U$ 的**右伴随**

$$\operatorname{Hom}_{R}\bigl(N, \operatorname{Hom}_{\mathbb{Z}}(R, E)\bigr) \;\cong\; \operatorname{Hom}_{\mathbb{Z}}(UN,\ E), \qquad f \longmapsto \bigl(n \mapsto (r \mapsto f(r n))\bigr).$$

而「左伴随正合 + 右伴随」给出「右伴随把内射对象送到内射对象」（把 $\operatorname{Hom}(-, G I)$ 换成 $\operatorname{Hom}(F -, I)$ 即知）；$U$ 显然正合 ✓。

> 续见 notes/thm.mod-enough-injectives.2.md

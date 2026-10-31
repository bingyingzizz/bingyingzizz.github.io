# 诱导同态　`prop.induced-homomorphism`　·　续页（第 2 页）
[在星图里打开](../#n=prop.induced-homomorphism)　·　第 1 页 [nodes/prop.induced-homomorphism.md](./prop.induced-homomorphism.md)

## 陈述（续）
$$f_{*} : \pi_{1}(X, x_{0}) \longrightarrow \pi_{1}(Y, y_{0}),$$
$$f_{*}([\alpha]) := [f \circ \alpha].$$

则：
1. **良定义**：$\alpha \simeq_{p} \beta \implies f \circ \alpha \simeq_{p} f \circ \beta$；
2. **同态**：$f_{*}([
\alpha][\beta]) = f_{*}([\alpha])\,f_{*}([\beta])$；
3. **函子性**：$(1_{X})_{*} = \operatorname{id}$，且 $(g 
\circ f)_{*} = g_{*} \circ f_{*}$；
4. **同伦不变**：若 $f \simeq g \; (\operatorname{rel} \{x_{0}\})$，则 $f_{*} = g
_{*}$。
因此 $\pi_{1}$ 是从「带基点拓扑空间」到「群」的**函子**。

> 续见 [nodes/prop.induced-homomorphism.3.md](./prop.induced-homomorphism.3.md)

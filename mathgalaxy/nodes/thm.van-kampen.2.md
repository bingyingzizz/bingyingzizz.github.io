# van Kampen 定理　`thm.van-kampen`　·　续页（第 2 页）
[在星图里打开](../#n=thm.van-kampen)　·　第 1 页 [nodes/thm.van-kampen.md](./thm.van-kampen.md)

## 陈述（续）
$$\pi_{1}(X, x_{0}) \;\cong\; \pi_{1}(U, x_{0}) *_{G} \pi_{1}(V, x_{0}),$$
$$G \;:=\; \pi_{1}(U \cap V,\ x_{0}).$$

右端**具体构造**如下（不是「满足某性质的对象」）：
1. 取**自由积** $\pi_{1}(U) * \pi_{1}(V)$：元素是有限字 $(u_{1}, v_{1}, u_{2}, v_{2}, \ldots)$，字母来自 $\pi_{1}(U) \sqcup \pi_{1}(V)$，相邻两个同属一个群的字母按该群乘法合并，长度为 $0$ 的字是单位；
2. 取由子集 $\{\, i_{*}(\gamma)\, 
j_{*}(\gamma)^{-1} : \gamma \in G \,\}$ 生成的**正规子群** $N$；
3. 商群 $\big(\pi_{1}(U) * \pi_{1}(V)\big) / N$ 就是 $\pi_{1}(X, x_{0})$。
等价陈述：$\pi_{1}(X, x_{0})$ 由像 $i_{*}\pi_{1}(U)$ 与 $j_{*}\pi_{1}(V)$ **生成**，而两组像之间**只有**来自 $G$ 的关系。

> 续见 [nodes/thm.van-kampen.3.md](./thm.van-kampen.3.md)

# 合冲的稳定性　`prop.syzygy-stability`　·　说明
根 `../`

取
$$P_{n} \oplus Q_{n} \twoheadrightarrow \Omega^{n}M \oplus F, \qquad P_{n} \oplus Q_{n} \twoheadrightarrow \Omega_{1}^{n}M \oplus F_{1},$$
（第二块用归纳假设中的同构把目标搬过去），两条预覆盖的中间项都是 $P_{n}\oplus Q_{n}$、都投射 ✓，再用一次比较引理，得
$$\Omega^{n+1}M \oplus \bigl(P_{n}\oplus Q_{n}\bigr) \;\cong\; \Omega_{1}^{n+1}M \oplus \bigl(P_{n}\oplus Q_{n}\bigr),$$
而这正是要的形式（投影项是投射模）✓。∎

⚠️ 上面的归纳步里，「$\Omega^{n}M$ 与 $\Omega_{1}^{n}M$ 不同」这件事不能靠一句「同构」带过 —— 归纳假设给的是**带直和项的同构**，所以每一步都得在直和之后重新做预覆盖。这正是「稳定」这个词的含义。

⭐ **规范化**：把「相差一个投射直和项」商掉之后，$\Omega^{n}$ 才成为真正的函子 —— 那个商范畴就是**稳定模范畴**，合冲在里面是良定义的对象。这也解释了为什么 $K_{0}$、稳定同伦论、以及 $K$ 理论都从「稳定」这个字眼开始。

> 续见 notes/prop.syzygy-stability.3.md

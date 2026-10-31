# 纤维余积与基变换　`prop.scalar-extension-coproduct`　·　说明
根 `../`

**证明（1）**：$s \mapsto s \otimes 1$、$t \mapsto 1 \otimes t$ 给出余锥。给余锥 $(\alpha : S \to U,\ \beta : T \to U)$，映射 $(s, t) \mapsto \alpha(s)\beta(t)$ 是 $R$-平衡的（这一步用**交换性**：$sr \otimes t$ 与 $s \otimes rt$ 给出同一个值），故由万有性质唯一给出 $R$-模映射 $S \otimes_{R} T \to U$；交换性又保证它保乘法，所以是代数同态。唯一性由纯张量生成全体给出 ✓。（2）（3）都由同一个平衡双线性表示给出，逐条验证公理 ✓。∎

⭐ **几何含义**：$\operatorname{Spec}(S \otimes_{R} T) \cong \operatorname{Spec} S \times_{\operatorname{Spec} R} \operatorname{Spec} T$。环的**推出**对应概形的**纤维积** —— 概形论里所有「基变换」都在用这一条。

⚠️ 交换性不能省：定义乘法 $(s \otimes t)(s_{1} \otimes t_{1}) = s s_{1} \otimes t t_{1}$ 要先把中间因子搬动，非交换环上搬不动，只能得到别的构造（还得多加关系）。

> 续见 notes/prop.scalar-extension-coproduct.2.md
